import clsx from 'clsx';
import React from 'react';
const CourseCard = (props) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div
        className={clsx(
          'card mb-4',
          'box-shadow',
          props.recommended && 'py-new active pos-rel'
        )}
      >
        <div className="card-header">
          {props.recommended && (
            <img src="/recommended.png" className="pos-abs" alt="recommended" />
          )}
          <h4 className="my-0 font-weight-normal">{props.title}</h4>
        </div>
        <div className="card-body text-center">
          {props.sellingPrice && props.sellingPrice !== props.price && (
            <>
              <h4 className="m-0 p-0 defaut">
                <del>₹ {props.price}</del>
              </h4>
              <sup>
                <i className="fa fa-inr" aria-hidden="true"></i>
              </sup>
            </>
          )}

          <h3>₹ {props.sellingPrice ? props.sellingPrice : props.price}</h3>
          <p className="my-1 lead1 col-gray">
            {props.numberOfSessions} classes
          </p>
          <div className="py-4 description">
            <p className="mb-2 col-gray">
              <strong>Curriculum</strong>
            </p>
            <p className="mb-3 font-size-14px">{props.description}</p>
          </div>
          <a href="https://student-octorun.web.app/register" target="_">
            <button
              type="button"
              className="btn btn-md btn-block btn-outline-primary trial-now"
            >
              Buy Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
