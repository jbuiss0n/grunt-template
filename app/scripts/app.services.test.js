'use strict';

describe('Service: MarvelImage', function () {
  var MarvelImage;

  beforeEach(function () {
    module('grunt-template-app');

    inject(function (_MarvelImage_) {
      MarvelImage = _MarvelImage_;
    });
  });

  it('should return the correct url format for `detail` thumbnail type', function () {
    // Given
    var thumbnail = { path: 'thumbnail_path', extension: 'thumbnail_extension' };

    // When
    var result = MarvelImage.detail(thumbnail);

    // Then
    expect(result).to.equal('thumbnail_path/detail.thumbnail_extension');
  });

  it('should return the correct url format for `portrait_incredible` thumbnail type', function () {
    // Given
    var thumbnail = { path: 'thumbnail_path', extension: 'thumbnail_extension' };

    // When
    var result = MarvelImage.portrait_incredible(thumbnail);

    // Then
    expect(result).to.equal('thumbnail_path/portrait_incredible.thumbnail_extension');
  });

  it('should return the correct url format for `portrait_medium` thumbnail type', function () {
    // Given
    var thumbnail = { path: 'thumbnail_path', extension: 'thumbnail_extension' };

    // When
    var result = MarvelImage.portrait_medium(thumbnail);

    // Then
    expect(result).to.equal('thumbnail_path/portrait_medium.thumbnail_extension');
  });

  it('should return the correct url format for `portrait_small` thumbnail type', function () {
    // Given
    var thumbnail = { path: 'thumbnail_path', extension: 'thumbnail_extension' };

    // When
    var result = MarvelImage.portrait_small(thumbnail);

    // Then
    expect(result).to.equal('thumbnail_path/portrait_small.thumbnail_extension');
  });
});
