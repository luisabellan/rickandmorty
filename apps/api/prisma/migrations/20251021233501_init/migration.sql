-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "apiId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT,
    "species" TEXT,
    "type" TEXT DEFAULT '',
    "gender" TEXT,
    "originId" INTEGER,
    "locationId" INTEGER,
    "image" TEXT,
    "url" TEXT,
    "created" TIMESTAMP(3),

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "apiId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "dimension" TEXT,
    "url" TEXT,
    "created" TIMESTAMP(3),

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "episodes" (
    "id" SERIAL NOT NULL,
    "apiId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "airDate" TEXT,
    "episode" TEXT,
    "url" TEXT,
    "created" TIMESTAMP(3),

    CONSTRAINT "episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CharacterToEpisode" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CharacterToEpisode_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "characters_apiId_key" ON "characters"("apiId");

-- CreateIndex
CREATE UNIQUE INDEX "locations_apiId_key" ON "locations"("apiId");

-- CreateIndex
CREATE UNIQUE INDEX "episodes_apiId_key" ON "episodes"("apiId");

-- CreateIndex
CREATE INDEX "_CharacterToEpisode_B_index" ON "_CharacterToEpisode"("B");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_originId_fkey" FOREIGN KEY ("originId") REFERENCES "locations"("apiId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "locations"("apiId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD CONSTRAINT "_CharacterToEpisode_A_fkey" FOREIGN KEY ("A") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToEpisode" ADD CONSTRAINT "_CharacterToEpisode_B_fkey" FOREIGN KEY ("B") REFERENCES "episodes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
