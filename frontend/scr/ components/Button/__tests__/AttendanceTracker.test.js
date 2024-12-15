import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AttendanceTracker from './AttendanceTracker';

describe('AttendanceTracker Component', () => {
  it('renders the title correctly', () => {
    render(<AttendanceTracker />);
    const title = screen.getByText(/Attendance Tracker/i);
    expect(title).toBeInTheDocument();
  });

  it('displays a list of students', () => {
    const mockStudents = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockStudents),
    });

    render(<AttendanceTracker />);

    mockStudents.forEach((student) => {
      expect(screen.getByText(student.name)).toBeInTheDocument();
    });

    global.fetch.mockRestore();
  });

  it('toggles attendance when a checkbox is clicked', () => {
    const mockStudents = [
      { id: 1, name: 'John Doe' },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockStudents),
    });

    render(<AttendanceTracker />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    global.fetch.mockRestore();
  });
});
