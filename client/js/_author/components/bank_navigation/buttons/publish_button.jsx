import React from 'react';

export default function PublishButton(props) {
  const { togglePublishAssessment, assessment, localizeStrings } = props;
  const strings = localizeStrings('bankListButtons');
  const isPublished = assessment.isPublished;
  const icon = isPublished ?
    (
      <i
        aria-label={strings.unpublish}
        className="material-icons is-published"
      >
        cloud_done
      </i>
    ) :
    (
      <i
        aria-label={strings.publish}
        className="material-icons"
      >
        cloud_upload
      </i>
    );
  const titleText = isPublished ?
    strings.unpublish :
    strings.publish;
  const uniqId = `publish-${assessment.id}`;
  if (!assessment.isToggling) {
    return (
      <button
        className={`au-c-btn au-c-btn--square au-c-publish ${isPublished ? 'is-published' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          togglePublishAssessment(assessment);
        }}
        onFocus={props.onFocus}
        aria-describedby={uniqId}
      >
        <span
          id={uniqId}
          role="tooltip"
        >
          {titleText}
        </span>
        { icon }
      </button>
    );
  }

  return (
    <button
      className={`au-c-btn au-c-btn--square au-c-publish ${isPublished ? 'is-published' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      onFocus={props.onFocus}
    >
      { icon }
    </button>
  );

}

PublishButton.propTypes = {
  togglePublishAssessment: React.PropTypes.func.isRequired,
  onFocus: React.PropTypes.func.isRequired,
  assessment: React.PropTypes.shape({}).isRequired,
  localizeStrings: React.PropTypes.func
};
