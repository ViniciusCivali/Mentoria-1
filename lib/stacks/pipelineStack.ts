import * as cdk from 'aws-cdk-lib';
import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import * as codebuild from '@aws-cdk/aws-codebuild';
import { Construct } from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
import {PipelineAppAlphaStage} from "../Stages/pipelineAppAlphaStage";

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('ViniciusCivali/Mentoria-1', 'main', {
          authentication: cdk.SecretValue.secretsManager('github-token')
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      }),
    });

    pipeline.addStage(new PipelineAppAlphaStage(this, "test", {
      stageName: "Alpha",
      env: props.env
    }));

  }
}