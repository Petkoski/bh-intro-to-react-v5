import React from "react";
import Pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import { navigate } from "@reach/router";
import Modal from "./Modal";

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
    showModal: false,
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
        url: animal.url,
      });
    }, console.error);
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal,
    } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: themeHook[0] }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
