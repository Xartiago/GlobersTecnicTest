export const Modal = ({ desc, icon }) => {
  return (
    <div className="modal">
      <span>
        {desc}
      </span>
      {icon}
    </div>
  )
}
