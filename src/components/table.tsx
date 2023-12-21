import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { getId } from '../helpers/getCharacteresId';
import { CharacterType } from '../store/types';

type PropsType = {
  renderCharacters: CharacterType[];
  handler: (url: string) => void;
};
export const BasicTable = ({
  renderCharacters,
  handler,
}: PropsType): React.JSX.Element => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650, backgroundColor: 'gray' }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">Height</TableCell>
          <TableCell align="left">Mass</TableCell>
          <TableCell align="left">Gender</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {renderCharacters.map(row => (
          <TableRow
            hover
            onClick={() => handler(row.url)}
            key={getId(row.url)}
            sx={{
              '&:last-child td, &:last-child th': { border: 0 },
              cursor: 'pointer',
              backgroundColor: 'darkgrey',
            }}
          >
            <TableCell component="th" scope="row">
              {getId(row.url)}
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.height}</TableCell>
            <TableCell align="left">{row.mass}</TableCell>
            <TableCell align="left">{row.gender}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
