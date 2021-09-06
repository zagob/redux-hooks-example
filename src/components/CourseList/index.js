import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function CourseList() {
  const [course, setCourse] = useState('');

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
      dispatch({ type: 'ADD_COURSE', title: course })
      setCourse('');
  }

  return (
      <>
        <ul>
            { courses.map(course => <li key={course}>{course}</li>) }
        </ul>
        <input type="text" value={course} onChange={(e) =>  setCourse(e.target.value)} />
        <button type="button" onClick={addCourse}>Adicionar curso</button>
      </>
  );
}