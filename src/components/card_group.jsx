import Card from './detail_card';

const CardContainer = () => {
  return (
    <div className="flex py-14 flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
      <div className="w-full md:w-1/2">
        <Card
          title="Title 1"
          content="CaAliqua quis excepteur esse reprehenderit labore nostrud fugiat in labore cupidatat esse nostrud aute anim. Tempor magna non incididunt magna elit qui ad commodo fugiat aute deserunt. Pariatur laborum ut exercitation sint et. Laborum do consectetur exercitation deserunt culpa excepteur minim.rd 1"
        />
      </div>
      <div className="w-full md:w-1/2">
        <Card
          title="Title 2"
          content="CaAliqua quis excepteur esse reprehenderit labore nostrud fugiat in labore cupidatat esse nostrud aute anim. Tempor magna non incididunt magna elit qui ad commodo fugiat aute deserunt. Pariatur laborum ut exercitation sint et. Laborum do consectetur exercitation deserunt culpa excepteur minim.rd 1"
        />
      </div>
      <div className="w-full md:w-1/2">
        <Card
          title="Title 3"
          content="CaAliqua quis excepteur esse reprehenderit labore nostrud fugiat in labore cupidatat esse nostrud aute anim. Tempor magna non incididunt magna elit qui ad commodo fugiat aute deserunt. Pariatur laborum ut exercitation sint et. Laborum do consectetur exercitation deserunt culpa excepteur minim.rd 1"
        />
      </div>
    </div>
  );
};

export default CardContainer;
