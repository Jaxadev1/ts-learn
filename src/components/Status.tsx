type StatusProps = {
  status: string
}


export const Status = (props: StatusProps) =>{
  let message
  if(props.status === "loading"){
    message = "loading..."
  } else if(props.status === "success"){
    message = "Data fetched succesfully!"
  } else if (props.status === "error") {
    message = "Error fetching data"
  }
  return(
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}