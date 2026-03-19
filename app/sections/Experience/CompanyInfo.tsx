import { formatToMonthYear } from '@/utils/utils'

interface Props {
  name: string
  position: string
  tenure: [Date, Date | 'current']
}

const CompanyInfo = ({ name, tenure, position }: Props) => {
  const [startDate, endDate] = tenure

  return (
    <div className="flex items-center gap-1">
      <div className="relative flex shrink-0 flex-col pr-4 md:flex-1">
        <h3 className="text-[22px] font-bold md:text-4xl">{name}</h3>
        <p className="absolute -bottom-6 w-[200%] font-bold text-neutral-500 max-md:text-xs">{position}</p>
      </div>

      <div className="bg-light-gray h-px flex-3" />
      <p className="shrink-0 pl-4 text-right max-md:text-sm md:flex-1">
        {formatToMonthYear(startDate)} - {endDate === 'current' ? 'Current' : formatToMonthYear(endDate)}
      </p>
    </div>
  )
}

export default CompanyInfo
