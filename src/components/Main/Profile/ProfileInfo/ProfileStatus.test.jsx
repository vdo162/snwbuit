import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status should be from props", () => {
    const component = create(<ProfileStatus status="My status"/>);
    const instance = component.root;
	const div = instance.findByType("div");
    expect(div.children[0]).toBe("My status");
  }); 
  
  test("after creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="My status"/>);
    const instance = component.root;
	const countInput = instance.findAllByType("input");
    expect(countInput.length).toBe(0);
  });
  
  test("after creation <input> should not be found", () => {
    const component = create(<ProfileStatus status="My status"/>);
    const instance = component.root;
    expect(() => {
		instance.findByType("input");
	}).toThrow();
  });
  
  test("<input> should be displayed in editMode", () => {
    const component = create(<ProfileStatus status="My status"/>);
    const root = component.root;
	const div = root.findByType("div");
	div.props.onDoubleClick();
	const input = root.findByType("input");
	console.log(input.props)
    expect(input.props.value).toBe("My status");
  });
  
  test("callback should be displayed called", () => {
    const mockCallback = jest.fn()
	const component = create(<ProfileStatus status="My status" updateStatus={mockCallback}/>);
    const root = component.root;
	const div = root.findByType("div");
	div.props.onDoubleClick();
	const input = root.findByType("input");
	input.props.onBlur();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});