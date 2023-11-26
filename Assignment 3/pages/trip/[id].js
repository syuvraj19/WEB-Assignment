import PageHeader from "@/components/PageHeader";
import MapWrapper from "@/components/Map";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "572bb8222b288919b68abf5a" } },
      { params: { id: "572bb8222b288919b68abf5b" } },
      { params: { id: "572bb8222b288919b68abf5c" } },
      { params: { id: "572bb8222b288919b68abf5d" } },
      { params: { id: "572bb8222b288919b68abf5e" } },
      { params: { id: "572bb8222b288919b68abf5f" } },
      { params: { id: "572bb8222b288919b68abf60" } },
      { params: { id: "572bb8222b288919b68abf51" } },
      { params: { id: "572bb8222b288919b68abf52" } },
      { params: { id: "572bb8222b288919b68abf53" } },
    ],
    fallback: "blocking",
  };
}


export async function getStaticProps(context) {
    const res = await fetch(`https://wild-teal-hermit-crab-tux.cyclic.app/api/trips/${context.params.id}`);
    const data = await res.json();
    return { props: { trip: data } };
}

const Trip = (props) => {
  const trip = props.trip;
  if (props.trip) {
    return (
      <>
        <PageHeader
          title={`Bike: ${trip?.bikeid}`}
          text={`${trip["start station name"]} - ${trip["end station name"]}`}
          showSubscriber={trip.usertype === "Subscriber" ? "true" : undefined}
          showCustomer={trip.usertype === "Customer" ? "true" : undefined}
        />
        <MapWrapper trip={trip}/>  
        <br />
        <ul>
          <li><b>Trip duration:</b> {(trip.tripduration / 60).toFixed(2)}</li>
          <li><b>Birth year:</b> {trip["birth year"]}</li>
          <li><b>Start time:</b> {trip["start time"]}</li>
          <li><b>Stop time:</b> {trip["stop time"]}</li>
        </ul>
      </>
    );
  } else {
    return null;
  }
};

export default Trip;