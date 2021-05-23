import { render } from "@testing-library/react";
import Event from "./Event";



describe("Event tests", () => {
  let event;
const handler = jest.fn();

  beforeEach(() => {
    event = {
      id: 1,
      title: "Title of sample event",
      location: "Location of the sample event",
      date: "date of sample event",
      time: "Time of sample event",
      max_number: 8,
      participants: [1]
    };
    handler.mockReset();
  });

  test("title is displayed", () => {
    const { getByText } = render(<Event event = {event} joined= {1===1} joinEvent = {handler} leaveEvent = {handler} />);
    expect(getByText(event.title)).toBeInTheDocument();
    expect(getByText(event.title)).toBeVisible();
  });

  // test("location and time is displayed", () => {
  //   const { getByText } = render(<Event title={event.title} location = {event.location} time = {event.time} numJoined = {event.numJoined} maxNumber = {event.maxNum} />);
  //   expect(getByText(event.location), "||", getByText(event.time)).toBeInTheDocument();
  //   expect(getByText(event.location), "||", getByText(event.time)).toBeVisible();
  // });

  // test("time is displayed", () => {
  //   const { getByText } = render(<Event title={event.title} location = {event.location} time = {event.time} numJoined = {event.numJoined} maxNumber = {event.maxNum} />);
  //   //const expectedDate = new Date(article.edited).toLocaleString();
  //   expect(screen.queryByText(event.time)).toBeInTheDocument();
  // });
});