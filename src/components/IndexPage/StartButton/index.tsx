import buttonIcon from '../../../assets/non-bg-logo.png'

interface StartButtonProps {
  onClick: () => void
}

export default function StartButton(props: StartButtonProps) {
  const onClick = props.onClick

  return (
    <div id="start-button">
      <button onClick={onClick}>
        <img src={buttonIcon} alt="" />
      </button>
      <p>Start your journey</p>
    </div>
  )
}