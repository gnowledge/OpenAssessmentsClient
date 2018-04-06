import React from 'react';

export default function EditButton(props) {
  const isPublished = props.assessment.isPublished;
  const strings = props.localizeStrings('bankListButtons');
  const uniqId = `edit-${props.assessment.id}`;
  return (
    <button
      className={`au-c-btn au-c-btn--square au-c-table__btn ${isPublished ? 'is-inactive' : ''}`}
      disabled={isPublished}
      onFocus={props.onFocus}
      onClick={props.selectItem}
      aria-describedby={uniqId}
    >
      <span
        id={uniqId}
        role="tooltip"
      >
        {strings.edit}
      </span>
      <i
        aria-label={strings.edit}
        className="material-icons"
      >
        edit
      </i>
    </button>
  );
}

EditButton.propTypes = {
  assessment: React.PropTypes.shape({
    isPublished: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string
  }).isRequired,
  onFocus: React.PropTypes.func.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  localizeStrings: React.PropTypes.func
};
