<script lang="ts">
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'
  import '@spectrum-css/calendar/dist/index-vars.css'
  import { chunk } from './lib/array'

  import ActionButton from './ActionButton.svelte'
  import Icon from './Icon.svelte'
  import ChevronRight100 from 'svelte-spectrum-icons/ui/ChevronRightMedium.svelte'
  import { generateCalendarCells } from './lib/calendar'

  const today = new Date()

  export let date = new Date()

  export let disabled = false

  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  function goNextMonth() {
    date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    cells.set(generateCalendarCells(date))
  }

  function goPrevMonth() {
    date = new Date(date.getFullYear(), date.getMonth() - 1, 1)
    cells.set(generateCalendarCells(date))
  }

  const cells = writable([])

  onMount(() => {
    cells.set(generateCalendarCells(date))
  })

  function isToday(date) {
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    )
  }
</script>

<div class="spectrum-Calendar">
  <div class="spectrum-Calendar-header">
    <div
      class="spectrum-Calendar-title"
      role="heading"
      aria-live="assertive"
      aria-atomic="true"
    >
      {date.toLocaleString('en-us', { month: 'long' })}
      {date.getFullYear()}
    </div>
    <ActionButton
      aria-label="Previous"
      title="Previous"
      class="spectrum-Calendar-prevMonth"
      quiet
      on:click={goPrevMonth}
    >
      <Icon icon={ChevronRight100} class="spectrum-UIIcon-ChevronLeft100" />
    </ActionButton>
    <ActionButton
      aria-label="Next"
      title="Next"
      class="spectrum-Calendar-nextMonth"
      quiet
      on:click={goNextMonth}
    >
      <Icon icon={ChevronRight100} class="spectrum-UIIcon-ChevronRight100" />
    </ActionButton>
  </div>
  <div
    class="spectrum-Calendar-body"
    role="grid"
    tabindex="0"
    aria-readonly="true"
    aria-disabled="false"
  >
    <table role="presentation" class="spectrum-Calendar-table">
      <thead role="presentation">
        <tr role="row">
          {#each daysOfTheWeek as day}
            <th
              role="columnheader"
              scope="col"
              class="spectrum-Calendar-tableCell"
            >
              <abbr class="spectrum-Calendar-dayOfWeek" title={day}>
                {day.slice(0, 1)}
              </abbr>
            </th>
          {/each}
        </tr>
      </thead>
      <tbody role="presentation">
        {#each chunk($cells, 7) as row}
          <tr role="row">
            {#each row as cell}
              <td
                role="gridcell"
                class="spectrum-Calendar-tableCell"
                tabindex={cell.outsideMonth ? '-1' : '0'}
                aria-disabled={cell.outsideMonth ? 'true' : 'false'}
                aria-selected="false"
                aria-invalid="false"
                title={cell.date.toLocaleDateString('en-us', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              >
                <span
                  role="presentation"
                  class="spectrum-Calendar-date"
                  class:is-today={isToday(cell.date)}
                  class:is-outsideMonth={cell.outsideMonth}
                >
                  {cell.date.getDate()}
                </span>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
