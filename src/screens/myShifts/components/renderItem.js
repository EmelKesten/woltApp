import MakeShift from "./MakeShift";

export const renderItem = ({ item }) => {
  if (item.booked) {
    return <MakeShift data={item} />;
  }
};
