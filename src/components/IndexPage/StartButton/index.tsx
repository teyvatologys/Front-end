import buttonIcon from '../../../assets/non-bg-logo.png'

export default function StartButton() {
  return (
    <div id="start-button">
      <button>
        <img src={buttonIcon} alt="" />
      </button>
      <p>Start your journey</p>
    </div>
  )
}