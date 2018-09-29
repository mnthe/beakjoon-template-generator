using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

/******************************************************************

<{{TITLE_TEXT}}>

문제
----
{{PROBLEM_TEXT}}


입력
----
{{INPUT_TEXT}}


출력
---
{{OUTPUT_TEXT}}


******************************************************************/

namespace BeakjoonOnlineJudge
{

    class Problem
    {

        private static void Answer(Func<string> ReadLine, Action<string> WriteLine)
        {

        }

#if TEST
        private static MockedIo GenerateModkedIo()
        {
            var mockedIo = new MockedIo();
            //**** INPUT HERE ****//
            mockedIo.InsertInputs({{INPUTS}});
            //**** OUTPUT HERE ****//
            mockedIo.InsertExpectedOutputs({{OUTPUTS}});
            return mockedIo;
        }
#endif

        public static void Main(string[] args)
        {
#if TEST
            var mockedIo = GenerateModkedIo();
            Answer(mockedIo.ReadLine, mockedIo.WriteLine);
            CheckCorrect();
#else
            Answer(Console.ReadLine, Console.WriteLine);
#endif
        }
    }

#if TEST
    class MockedIo
    {
        public List<string> Inputs = new List<string>();
        public List<string> ExpectedOutputs = new List<string>();
        public List<string> CapturedOutputs = new List<string>();

        public string ReadLine()
        {
            if (Inputs.Count == 0)
                throw new ArgumentOutOfRangeException();

            var res = Inputs[0];
            Inputs.RemoveAt(0);
            return res;
        }

        public void WriteLine(string str)
        {
            CapturedOutputs.Add(str);
        }

        public void InsertInputs(params string[] inputs)
        {
            Inputs.AddRange(inputs);
        }

        public void InsertExpectedOutputs(params string[] outputs)
        {
            ExpectedOutputs.AddRange(outputs);
        }

        public void CheckCorrect()
        {
            if (ExpectedOutputs.Count != CapturedOutputs.Count)
                throw new ValidationException();

            foreach (var item in ExpectedOutputs.Select((value, i) => new { i, value }))
            {
                var expected = item.value;
                var index = item.i;
                var captured = CapturedOutputs[index];
                Console.WriteLine($"Expected: {expected}\nCaptured: {captured}");
                if (expected != captured)
                {
                    throw new ValidationException();
                }
            }
        }
    }
#endif
}