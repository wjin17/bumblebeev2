interface IRoundButton {
  label: string
  className?: string
}

interface IRoundButton extends React.ComponentPropsWithoutRef<'button'> {}

const RoundButton: React.FC<IRoundButton> = ({
  className,
  label,
  ...buttonProps
}) => {
  return (
    <button className={`rounded-full px-8 py-2 ${className}`} {...buttonProps}>
      <h1>{label}</h1>
    </button>
  )
}

export default RoundButton
