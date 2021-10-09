import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import CourseCard from './CourseCard';
export const AGE_GROUP_SIX_TO_EIGHT = '6-8 Years';
export const AGE_GROUP_NINE_TO_ELEVEN = '9-11 Years';
export const AGE_GROUP_TWELEVE_TO_FOURTEEN = '12-14 Years';
export const AGE_GROUP_ALL = 'All age group';

const AGE_GROUPS = [
  AGE_GROUP_SIX_TO_EIGHT,
  AGE_GROUP_NINE_TO_ELEVEN,
  AGE_GROUP_TWELEVE_TO_FOURTEEN,
];
export const TRIAL_PLAN = 'Trial';
export const ECONOMY_PLAN = 'Economy';
export const PREMIUM_PLAN = 'Premium';

export const ALL_PLANS = [TRIAL_PLAN, ECONOMY_PLAN, PREMIUM_PLAN];

const CoursesComponent = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(false);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState(
    AGE_GROUP_NINE_TO_ELEVEN
  );
  const [selectedPlanType, setSelectedPlanType] = useState(ECONOMY_PLAN);
  useEffect(() => {
    setLoading(true);
    fetch('https://codebee-281912.firebaseio.com/courses.json')
      .then((resp) => resp.json())
      .then((data) => {
        const courseList = data;
        const activeCourses = courseList.filter((c) => c.active);
        setAllCourses(activeCourses);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    const filteredCourses = allCourses.filter(
      (course) =>
        course.ageGroup === selectedAgeGroup &&
        course.planType === selectedPlanType
    );
    setCourses(filteredCourses);
  }, [allCourses, selectedPlanType, selectedAgeGroup]);
  return (
    <div className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="text-orange mb-4">Our Courses</h3>
          </div>
          <div className="col-lg-9 mx-auto">
            <div className="clearfix py-5" style={{ display: 'flex' }}>
              <Form.Group>
                <Form.Control
                  as="select"
                  value={selectedAgeGroup}
                  onChange={(event) => {
                    setSelectedAgeGroup(event.target.value);
                  }}
                >
                  {AGE_GROUPS.map((ag) => (
                    <option key={ag} value={ag}>
                      Age Group : {ag}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <span style={{ flex: 1 }} />
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <button
                    className={clsx(
                      'nav-link',
                      'border-radius-left',
                      selectedPlanType === ECONOMY_PLAN && 'active'
                    )}
                    data-toggle="pill"
                    onClick={() => setSelectedPlanType(ECONOMY_PLAN)}
                  >
                    Group
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={clsx(
                      'nav-link',
                      'border-radius-right',
                      selectedPlanType === PREMIUM_PLAN && 'active'
                    )}
                    data-toggle="pill"
                    onClick={() => setSelectedPlanType(PREMIUM_PLAN)}
                  >
                    Private
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 bg-gray pt-5 pb-4">
            <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="tab-content">
                  <div className="tab-pane active" id="home">
                    <div className="row">
                      {loading ? (
                        <Spinner animation="border" variant="primary" />
                      ) : (
                        courses.map((course) => (
                          <CourseCard
                            {...course}
                            key={JSON.stringify(course)}
                          />
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoursesComponent;
