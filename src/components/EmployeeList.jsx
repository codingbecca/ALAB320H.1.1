import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
  const employeeList = [
    {
      imgSrc:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "James King",
      title: "President and CEO",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "Julie Taylor",
      title: "VP of Marketing",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "Eugene Lee",
      title: "CFO",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "John Williams",
      title: "VP of Engineering",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "Ray Moore",
      title: "VP of Sales",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "...",
      name: "Paul Jones",
      title: "QA Manager",
    },
  ];

  return employeeList.map((employee) => (
    <EmployeeListItem
      src={employee.imgSrc}
      alt={employee.alt}
      name={employee.name}
      title={employee.title}
      key={employee.name}
    />
  ));
}
