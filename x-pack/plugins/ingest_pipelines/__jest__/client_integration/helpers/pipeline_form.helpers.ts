/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import { TestBed } from '../../../../../test_utils';

export const getFormActions = (testBed: TestBed) => {
  const { find, form } = testBed;

  // User actions
  const clickSubmitButton = () => {
    find('submitButton').simulate('click');
  };

  const clickTestPipelineButton = () => {
    find('testPipelineButton').simulate('click');
  };

  const clickShowRequestLink = () => {
    find('showRequestLink').simulate('click');
  };

  const toggleVersionSwitch = () => {
    form.toggleEuiSwitch('versionToggle');
  };

  const toggleOnFailureSwitch = () => {
    form.toggleEuiSwitch('onFailureToggle');
  };

  return {
    clickSubmitButton,
    clickShowRequestLink,
    toggleVersionSwitch,
    toggleOnFailureSwitch,
    clickTestPipelineButton,
  };
};

export type PipelineFormTestSubjects =
  | 'submitButton'
  | 'pageTitle'
  | 'savePipelineError'
  | 'pipelineForm'
  | 'versionToggle'
  | 'versionField'
  | 'nameField.input'
  | 'descriptionField.input'
  | 'processorsEditor'
  | 'onFailureToggle'
  | 'onFailureEditor'
  | 'testPipelineButton'
  | 'showRequestLink'
  | 'requestFlyout'
  | 'requestFlyout.title'
  | 'testPipelineFlyout'
  | 'testPipelineFlyout.title'
  | 'documentationLink';
