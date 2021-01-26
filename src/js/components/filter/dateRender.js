/**
 * render datepicker
 * @param filteredData
 * @return void
 */

export default function dateRender() {
  // Jquery call for datepicker
  // eslint-disable-next-line no-undef
  $('#filter-date').datepicker({
    clearButton: true,
    toggleSelected: false,
    range: true,
    multipleDatesSeparator: '-',
  });
}
