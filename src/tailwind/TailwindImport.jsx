import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'


export const tailwindObj =  {
    headerless : {
       Dialog: Dialog,
       DialogPanel : DialogPanel,
       Disclosure : Disclosure,
       DisclosureButton : DisclosureButton,
       DisclosurePanel : DisclosurePanel,
       Popover: Popover,
       PopoverButton : PopoverButton,
       PopoverGroup: PopoverGroup,
       PopoverPanel: PopoverPanel,
       
    },
    heroicons24 : {
        ArrowPathIcon:ArrowPathIcon,
        Bars3Icon: Bars3Icon,
        ChartPieIcon: ChartPieIcon,
        CursorArrowRaysIcon: CursorArrowRaysIcon,
        FingerPrintIcon: FingerPrintIcon,
        SquaresPlusIcon:  SquaresPlusIcon,
        XMarkIcon: XMarkIcon,


    },
    heroicons20 : {
        ChevronDownIcon:ChevronDownIcon,
        PhoneIcon:PhoneIcon,
        PlayCircleIcon:PlayCircleIcon,
    }

}


