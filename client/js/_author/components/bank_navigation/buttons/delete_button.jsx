import React from 'react';

export default function DeleteButton(props) {
  const {
    deleteAssessment, assessment, onFocus, localizeStrings
  } = props;
  const isPublished = assessment.isPublished;
  const strings = localizeStrings('bankListButtons');
  const uniqId = `delete-${assessment.id}`;
  return (
    <button
      className={`au-c-btn au-c-btn--square au-c-table__btn ${isPublished ? 'is-inactive' : ''}`}
      disabled={isPublished}
      onClick={(e) => {
        e.stopPropagation();
        deleteAssessment(assessment.bankId, assessment.id);
      }}
      onFocus={onFocus}
      aria-describedby={uniqId}
    >
      <span
        id={uniqId}
        role="tooltip"
      >
        {strings.delete}
      </span>
      <i
        aria-label={strings.delete}
        className="material-icons"
      >
        delete
      </i>
    </button>
  );
}

DeleteButton.propTypes = {
  deleteAssessment: React.PropTypes.func.isRequired,
  onFocus: React.PropTypes.func.isRequired,
  assessment: React.PropTypes.shape({
    isPublished: React.PropTypes.bool.isRequired,
    bankId: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  localizeStrings: React.PropTypes.func
};
