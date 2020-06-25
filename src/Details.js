import React from "react";
import Pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

// const Details = (props) => {
//   // return <h1>Hi lol</h1>;
//   return (
//     <pre>
//       <code>{JSON.stringify(props, null, 4)}</code>
//     </pre>
//   );
// };

class Details extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //this.state - self-contained within the class
  //   this.state = {
  //     loading: true,
  //   };
  // }

  state = {
    loading: true,
  };

  componentDidMount() {
    //this.props - info you get from your parent class (handed-down to you)
    Pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        //Shallow merge (add property or override if exist [ex: loading property])
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// export default Details;

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
