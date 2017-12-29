/*
 *  Test of the javascript functionality on the site with off line data.
 *
 *  Listing of times, projects and tasks for a person.
 *
 *  Shall we keep the Seconds? Either we calculate it when we insert the info in the DB
 *  or we calculate it when we extract the info from the DB or finally, we don't include it
 *  and calculate the amount of time on the javascript side.
 */

var TimesForPerson =
    [
        {
            PeopleID: 1,
            ProjectID: 1,
            TaskID: 1,
            Seconds: 60,                            // Shall we have this??
            StartDate: '2017-10-01 19:00:00.000',
            EndDate: '2017-10-01 19:01:00.000'
        },
        {
            PeopleID: 1,
            ProjectID: 1,
            TaskID: 2,
            Seconds: 60,                            // Shall we have this??
            StartDate: '2017-10-01 17:00:00.000',
            EndDate: '2017-10-01 17:01:00.000'
        },
        {
            PeopleID: 1,
            ProjectID: 1,
            TaskID: 2,
            Seconds: 60,                            // Shall we have this??
            StartDate: '2017-10-01 15:00:00.000',
            EndDate: '2017-10-01 15:01:00.000'
        },
        {
            PeopleID: 1,
            ProjectID: 1,
            TaskID: 3,
            Seconds: 60,                            // Shall we have this??
            StartDate: '2017-10-01 12:00:00.000',
            EndDate: '2017-10-01 12:01:00.000'
        },
        {
            PeopleID: 1,
            ProjectID: 3,
            TaskID: 1,
            Seconds: 60,                            // Shall we have this??
            StartDate: '2017-10-01 20:00:00.000',
            EndDate: '2017-10-01 20:01:00.000'
        }
    ];
