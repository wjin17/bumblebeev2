interface IPricingCard {
  title: string
  description?: string
}

interface IPricingCard extends React.ComponentPropsWithoutRef<'div'> {}

const PricingCard: React.FC<IPricingCard> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="h-[28rem] flex-1 p-4">
      <div className="flex h-full w-full flex-col rounded-3xl bg-white p-8 shadow-xl">
        <h1 className="mb-4 text-2xl">{title}</h1>
        <p className="text-sm text-neutral-500">{description}</p>
        <div className="font-medium">{children}</div>
      </div>
    </div>
  )
}

export default PricingCard
