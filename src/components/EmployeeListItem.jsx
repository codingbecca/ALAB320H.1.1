import "./EmployeeListItem.css"

export default function EmployeeListItem ({src, alt, name, title}) {
    return (
        <div className="listItem">
            <img src={src} alt={alt} className="avatar"/>
            <div className="employeeDetails">
                <p className="name">{name}</p>
                <p className="title">{title}</p>
            </div>
        </div>
    )
}