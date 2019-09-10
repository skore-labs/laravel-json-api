<?php

namespace SkoreLabs\JsonApi\Http\Resources;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

/**
 * @property \Illuminate\Support\Collection $collection
 */
trait CollectsWithIncludes
{
    /**
     * Attach with the collects' resource models relationships.
     *
     * @return void
     */
    protected function withIncludes()
    {
        $collectionIncludes = Collection::make(
            Arr::get($this->with, 'includes', [])
        );

        /** @var \SkoreLabs\JsonApi\Http\Resources\JsonApiResource $jsonResource */
        foreach ($this->collection->toArray() as $jsonResource) {
            /** @var \SkoreLabs\JsonApi\Http\Resources\JsonApiResource $resource */
            foreach ($jsonResource->getIncluded() as $resource) {
                $collectionIncludes->push($resource);
            }
        }

        Arr::set($this->with, 'includes', $this->checkUniqueness(
            $collectionIncludes
        )->values()->all());
    }
}
