import React from 'react';

export default function PreviewButton(props) {
  const isPublished = props.assessment.isPublished;
  const strings = props.localizeStrings('bankListButtons');
  const uniqId = `preview-${props.assessment.id}`;
  return (
    <button
      className={`au-c-btn au-c-btn--square au-c-table__btn  ${isPublished ? '' : 'is-inactive'}`}
      disabled={!isPublished}
      onClick={(e) => {
        e.stopPropagation();
        window.open(`${window.location.href}banks/${props.assessment.bankId}/assessments/${props.assessment.id}/preview`);
      }}
      onFocus={props.onFocus}
      aria-describedby={uniqId}
    >
      <span
        id={uniqId}
        role="tooltip"
      >
        {strings.preview}
      </span>
      <i
        aria-label={strings.preview}
        className="material-icons"
      >
        remove_red_eye
      </i>
    </button>
  );
}

PreviewButton.propTypes = {
  assessment: React.PropTypes.shape({
    isPublished: React.PropTypes.bool.isRequired,
    bankId: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  onFocus: React.PropTypes.func.isRequired,
  localizeStrings: React.PropTypes.func
};
