import React from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css'

const ProjectCard = ({ title, heading, imageSrc, description, link }) => {
  return (
    <div className="card-container">
      <Card className="card-custom">
        <h3 className="text-3xl p-3 text-center text-secondary">{title}</h3>
        <div className="card-content flex flex-col items-center justify-center">
          <Link href={link}>
            <Image
              width={400}
              height={400}
              priority={true}
              alt="Your Alt Text"
              src={imageSrc}
            />
          </Link>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
          <p className="flex font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
