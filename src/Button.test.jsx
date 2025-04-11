import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  test("renders a button with + sign", () => {
    const mockSetNumber = jest.fn();
    render(<Button setNumber={mockSetNumber} />);

    const buttonElement = screen.getByRole("button", { name: "+" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls setNumber with increment function when clicked", () => {
    // Create a mock function
    const mockSetNumber = jest.fn();

    // Render the Button component with the mock function
    render(<Button setNumber={mockSetNumber} />);

    // Find and click the button
    const buttonElement = screen.getByRole("button", { name: "+" });
    fireEvent.click(buttonElement);

    // Check if the mock function was called correctly
    expect(mockSetNumber).toHaveBeenCalledTimes(1);

    // Check that it was called with a function (we can't directly test the callback)
    // So we'll check if the argument is a function
    expect(typeof mockSetNumber.mock.calls[0][0]).toBe("function");

    // Test the callback function directly
    const callback = mockSetNumber.mock.calls[0][0];
    expect(callback(5)).toBe(6); // When prev is 5, it should return 6
  });
});
