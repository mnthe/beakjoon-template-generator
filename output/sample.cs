using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

/******************************************************************

<We love kriii>

문제
----
ACM-ICPC 인터넷 예선, Regional, 그리고 World Finals까지 이미 2회씩 진출해버린 kriii는 미련을 버리지 못하고 왠지 모르게 올 해에도 파주 World Finals 준비 캠프에 참여했다.

대회를 뜰 줄 모르는 지박령 kriii를 위해서 격려의 문구를 출력해주자.


입력
----
본 문제는 입력이 없다.


출력
---
두 줄에 걸쳐 "강한친구 대한육군"을 한 줄에 한 번씩 출력한다.


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
            mockedIo.InsertInputs();
            //**** OUTPUT HERE ****//
            mockedIo.InsertExpectedOutputs("강한친구 대한육군", "강한친구 대한육군");
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