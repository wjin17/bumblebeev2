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
    <div className="flex-1 p-4">
      <div className="flex h-full w-full flex-col rounded-3xl bg-amber-50 p-8 shadow-xl">
        <div>
          <h1 className="text-2xl">{title}</h1>
          <p className="mt-4 text-sm text-neutral-500">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

export default PricingCard
