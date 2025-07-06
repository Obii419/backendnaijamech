import { Request, Response } from "express";

export const getAllMechanics = (req: Request, res: Response) => {
  const dummyMechanics = [
    {
      id: 1,
      name: "John Doe",
      zone: "South-West",
      specialization: "Engine Repair",
      contact: "08012345678",
    },
    {
      id: 2,
      name: "Jane Smith",
      zone: "North-Central",
      specialization: "Electrical",
      contact: "08098765432",
    },
  ];

  res.status(200).json(dummyMechanics);
};
