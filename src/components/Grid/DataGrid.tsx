export default function DataGrid({
  id, name, city, birth,
}:{id:string, name:string, city:string, birth:string}) {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{city}</td>
      <td>{birth}</td>
    </tr>
  );
}
