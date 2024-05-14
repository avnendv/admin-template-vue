import { h } from 'vue'
import { Icon } from '@iconify/vue'
import DropdownAction from './dropdown-action.vue'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Payment } from './data'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate'),
        'onUpdate:checked': (value: any) => table.toggleAllPageRowsSelected(!!value),
        ariaLabel: 'Select all'
      }),
    cell: ({ row }) => {
      return h(Checkbox, {
        checked: row.getIsSelected(),
        'onUpdate:checked': (value: any) => row.toggleSelected(!!value),
        ariaLabel: 'Select row'
      })
    },
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: 'ghost',
          onClick: () => column.toggleSorting(column.getIsSorted() === 'asc')
        },
        () => ['Email', h(Icon, { class: 'ml-2 h-4 w-4', icon: 'ph:arrows-down-up-thin' })]
      )
    },
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email'))
  },
  {
    accessorKey: 'status',
    enablePinning: false,
    header: 'Status',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status'))
  },
  {
    accessorKey: 'amount',
    header: () => h('div', { class: 'text-right' }, 'Amount'),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return h('div', { class: 'text-right font-medium' }, formatted)
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return h(
        'div',
        { class: 'relative' },
        h(DropdownAction, {
          payment
        })
      )
    }
  }
]
