{
    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        empId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.empId, person.work());
    }

    internWork({
        name: 'oopsdev',
        score: 1,
        empId: 123,
        work: () => {},
    });
}