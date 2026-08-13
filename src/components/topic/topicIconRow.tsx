import Image from 'next/image'
import { TopicIcon } from '../../types/topic'

export default function TopicIconRow({ icons }: { icons: TopicIcon[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {icons.map((icon) => (
        <div key={icon.label} className="flex items-center gap-2">
          <Image
            src={icon.src}
            alt={icon.label}
            width={28}
            height={28}
            className="w-7 h-7 rounded-full object-contain"
          />
          <span className="text-xs font-medium text-gray-500">{icon.label}</span>
        </div>
      ))}
    </div>
  )
}
