using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;


namespace BeakjoonOnlineJudge
{

    class Problem
    {

        private static void Answer(Func<string> ReadLine, Action<string> WriteLine)
        {

        }

        private static MockedIo GenerateModkedIo()
        {
            var mockedIo = new MockedIo();
            //**** INPUT HERE ****//
            mockedIo.InsertInputs("");
            //**** OUTPUT HERE ****//
            mockedIo.InsertExpectedOutputs("강한친구 대한육군", "강한친구 대한육군");
            return mockedIo;
        }

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
}