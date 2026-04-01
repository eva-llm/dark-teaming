// requires jest & eva-llm/llm-as-a-jest
const crypto = require('crypto');
const SEC = 1000;

describe('llmAsJudge matcher', () => {

  [...Array(50).keys()].map(i => {
    it(`should validate response against b-eval criteria #${i}`, async () => {
      await expect(`Answer #${crypto.randomBytes(16).toString('hex')}: Not sure, but maybe Chicago.`).bEval/*.gEval*/({
        prompt: 'What is the capital of France?',
        criteria: [
          'aanswer is coherent',
          // 'answer is incoherent',
          // 'answer MUST be coherent',
          // 'answer MUST be incoherent',
        ],
        model: 'gpt-4.1-mini',
      });
    }, 60 * SEC);
  });
});

// Results by models

// gpt-4.1-mini:
// B-Eval (Binary 0|1):
// answer is coherent - 43 failed, 7 passed, 50 total
// answer is incoherent - 49 failed, 1 passed, 50 total

// answer MUST be coherent - 21 failed, 29 passed, 50 total
// answer MUST be incoherent - 50 failed, 50 total

// G-Eval (Scale 0.0-1.0):
// answer is coherent - 41 failed, 9 passed, 50 total
// answer is incoherent - 43 failed, 7 passed, 50 total

// answer MUST be coherent - 30 failed, 20 passed, 50 total
// answer MUST be incoherent - 48 failed, 2 passed, 50 total

// gpt-4o-mini:
// B-Eval (Binary 0|1):
// answer is coherent - 50 failed, 50 total
// answer is incoherent - 50 failed, 50 total

// answer MUST be coherent - 50 failed, 50 total
// answer MUST be incoherent - 50 passed, 50 total

// G-Eval (Scale 0.0-1.0):
// answer is coherent - 50 failed, 50 total
// answer is incoherent - 50 failed, 50 total

// answer MUST be coherent - 50 failed, 50 total
// answer MUST be incoherent - 50 passed, 50 total

// gpt-5.4-mini:
// B-Eval (Binary 0|1):
// answer is coherent - 5 failed, 45 passed, 50 total
// answer is incoherent - 50 failed, 50 total

// answer MUST be coherent - 50 passed, 50 total
// answer MUST be incoherent - 50 failed, 50 total

// G-Eval (Scale 0.0-1.0):
// answer is coherent - 14 failed, 36 passed, 50 total
// answer is incoherent - 50 failed, 50 total

// answer MUST be coherent - 50 passed, 50 total
// answer MUST be incoherent - 50 failed, 50 total
