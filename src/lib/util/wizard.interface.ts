import { EventEmitter, Injectable } from '@angular/core';
import { WizardStep } from './wizard-step.interface';

@Injectable()
export abstract class WizardBase {
  public abstract navBarDirection: string;
  public abstract get wizardSteps(): WizardStep[];
  public abstract disableNavigationBar: boolean;
  public abstract get completed(): boolean;
  public abstract isNavigable(destinationIndex: number): boolean;
  public abstract getIndexOfStepWithId(stepId: string): number;
  public abstract getIndexOfStep(step: WizardStep): number;
  public abstract goToStep(destinationIndex: number, preFinalize?: EventEmitter<void>, postFinalize?: EventEmitter<void>): void;
}
