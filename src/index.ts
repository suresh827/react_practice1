import { Submission } from "./models/Submission";
const submissions: Submission[] = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

function addSubmission(
  submissions: Submission[],
  newName: string,
  newScore: number,
  newDate: string
): void {
  const newsubmission: Submission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  };
  submissions.push(newsubmission);
}

addSubmission(submissions, "suresh", 80, "2022-09-26");

console.log(submissions);

function deleteSubmissionByIndex(
  submissions: Submission[],
  index: number
): void {
  submissions.splice(index, 1);
}

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

const findSubmissionByName = (
  submissions: Submission[],
  name: string
): Submission | undefined => {
  return submissions.find((submission) => submission.name === name);
};

console.log(findSubmissionByName(submissions, "Jill"));

const findLowestScore = (submissions: Submission[]): Submission | undefined => {
  if (submissions.length === 0) return undefined;
  let lowest: Submission = submissions[0];
  submissions.forEach((submission) => {
    if (submission.score < lowest.score) {
      lowest = submission;
    }
  });
  return lowest;
};

console.log(findLowestScore(submissions));

const findAverageScore = (submissions: Submission[]): number | undefined => {
  if (submissions.length === 0) return undefined;
  let total_score: number = 0;
  let total_submissions = submissions.length;
  submissions.forEach((submission) => {
    total_score = total_score + submission.score;
  });
  return total_score / total_submissions;
};

console.log(findAverageScore(submissions));
