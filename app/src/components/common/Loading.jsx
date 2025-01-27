import { Loader2 } from 'lucide-react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="text-base-content/70">Loading...</span>
      </div>
    </div>
  )
}

export default Loading