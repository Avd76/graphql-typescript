import {Pool} from 'pg'


export const pool = new Pool({
connectionString: 'postgresql://postgres:KQTLOP23@localhost:5432/authtodos'
})