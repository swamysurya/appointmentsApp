import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStar} = props
  const {id, title, dateOfAppointment, isStared} = appointmentDetails
  const starImageUrl =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  const staredImageUrl =
    'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  const staredImage = isStared ? staredImageUrl : starImageUrl

  const starChange = () => {
    toggleStar(id)
  }

  return (
    <li className="liElement">
      <div className="titleStar">
        <h3 className="titleName">{title}</h3>
        <button
          className="starBtn"
          type="button"
          data-testid="star"
          onClick={starChange}
        >
          <img className="starImage" src={staredImage} alt="star" />
        </button>
      </div>
      <p className="dateOfAppointmentPara">{dateOfAppointment}</p>
    </li>
  )
}

export default AppointmentItem
