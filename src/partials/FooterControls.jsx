import { ChevronLeft, ChevronRight } from 'lucide-react'

const FooterControls = () => {
  return (
    <div className="flex items-center pt-2">
          <p className="p-2 text-sm font-bold inline">1-10 de 32</p>
          <button className="inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-l-md text-sm text-slate-400 border border-gray-200">
            <ChevronLeft />
          </button>
          <button className="inline h-8 bg-gray-100 hover:bg-gray-200 px-4 rounded-r-md text-sm text-slate-400 border border-gray-200">
            <ChevronRight />
          </button>
        </div>
  )
}

export default FooterControls